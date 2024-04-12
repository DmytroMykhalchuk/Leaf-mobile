import React, { useState } from 'react';
import { AccountConfig } from './Elements/AccountConfig';
import { AccountData } from './Elements/AccountData';
import { authConfig } from '../../configs/auth/auth';
import { Box, Heading, ScrollView, Text, VStack, View } from '@gluestack-ui/themed';
import { createAccount } from '../../store/auth/authReducer';
import { Formik } from 'formik';
import { GoogleSignType } from '../../store/auth/authTypes';
import { ImageOrVideo } from 'react-native-image-crop-picker';
import { ProceedButton } from '../Auth/Elements/ProceedButton';
import { StyleSheet } from 'react-native';
import { TabBar } from '../Auth/Elements/TabBar';
import { Tabs } from 'react-native-collapsible-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { UserRoleType } from '../../store/user/userTypes';
import { getProfile } from '../../store/user/userSelector';
import { EditAccount } from './Elements/EditAccount';
import { updateProfile } from '../../store/user/userReducer';

type FormValuesType = {
  name: string;
  email: string;
  avatar: string;
  country: string;
  role: string;
};

type FormErrorType = {
  name?: string;
  avatar?: string;
  country?: string;
  role?: string;
};

type EditAccountFormType = {
  onNavigateChangeEmail: (email: string) => void;
  navigateBack: () => void;
};

export const EditAccountForm: React.FC<EditAccountFormType> = ({ onNavigateChangeEmail, navigateBack }) => {
  const dispatch: any = useDispatch();
  const profile = useSelector(getProfile);

  const [isEmailNotification, setIsEmailNotification] = useState(true);
  const [avatar, setAvatar] = useState<null | ImageOrVideo>(null);

  const toggleEmailNotidication = () => setIsEmailNotification((prev: boolean) => !prev);

  const onChangeAvatar = (avatar: ImageOrVideo) => {
    setAvatar(avatar);
  };

  const validation = (values: FormValuesType) => {
    const errors = {} as FormErrorType;

    if (!values.name.length) {
      errors.name = 'Required';
    }

    if (!avatar && !profile?.picture) {
      errors.avatar = 'Required';
    } else {

    }

    if (!values.country) {
      errors.country = 'Required';
    }

    if (!values.role) {
      errors.role = 'Required';
    }

    return errors;
  };

  const onSubmit = (values: FormValuesType) => {
    const userData = {
      avatar: avatar as ImageOrVideo,
      nickname: values.name,
      country: values.country,
      role: values.role as UserRoleType,
      isEmailNotify: isEmailNotification,
    };

    dispatch(updateProfile(userData, navigateBack))
  };

  const initialValues = {
    name: profile?.nickname || '',
    email: profile?.email || '',
    isEmailNotification: true,
    avatar: profile?.picture || '',
    country: profile?.country || authConfig.defaultCountry,
    role: profile?.role || 'student',
  };

  const isEmailVerified = true;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validation}
      validateOnChange={false}
    >
      {({ handleChange, handleSubmit, values, errors, }) => (
        <VStack flex={1}>
          <ScrollView flex={1}>
            <EditAccount
              values={values}
              errors={errors}
              isEmailVerified={isEmailVerified}
              handleChange={handleChange}
              onChangeAvatar={onChangeAvatar}
              onNavigateChangeEmail={onNavigateChangeEmail}
            />
            <View>
              <Heading px={'$3'} mb={4}>Config</Heading>
              <AccountConfig
                toggleEmailNotidication={toggleEmailNotidication}
                isEmailNotification={isEmailNotification}
              />
            </View>
          </ScrollView>
          <ProceedButton handleSubmit={handleSubmit} title='Update profile data' iconName='update' />
        </VStack>
      )}
    </Formik>
  );
};