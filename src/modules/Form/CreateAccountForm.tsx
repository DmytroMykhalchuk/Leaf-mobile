import React, { useState } from 'react';
import { AccountConfig } from './Elements/AccountConfig';
import { AccountData } from './Elements/AccountData';
import { authConfig } from '../../configs/auth/auth';
import { Box, VStack } from '@gluestack-ui/themed';
import { createAccount } from '../../store/auth/authReducer';
import { Formik } from 'formik';
import { GoogleSignType } from '../../store/auth/authTypes';
import { ImageOrVideo } from 'react-native-image-crop-picker';
import { ProceedButton } from '../Auth/Elements/ProceedButton';
import { StyleSheet } from 'react-native';
import { TabBar } from '../Auth/Elements/TabBar';
import { Tabs } from 'react-native-collapsible-tab-view';
import { useDispatch } from 'react-redux';
import { UserRoleType } from '../../store/user/userTypes';

type FormValuesType = {
  name: string;
  email: string;
  avatar: string;
  country: string;
  role: string;
};

type FormErrorType = {
  name?: string;
  email?: string;
  avatar?: string;
  country?: string;
  role?: string;
};

type CreateAccountFormType = {
  googleSign: GoogleSignType;
  navigateToEmailVerification: () => void;
};

const CreateAccountForm: React.FC<CreateAccountFormType> = ({ googleSign, navigateToEmailVerification }) => {
  const dispatch: any = useDispatch();

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

    if (!values.email.length) {
      errors.email = 'Required';
    }

    if (!avatar) {
      errors.avatar = 'Required';
    } else {

    }

    if (!values.country) {
      errors.country = 'Required';
    }

    if (!values.role) {
      errors.role = 'Required';
    }

    if (errors) {
      //todo  check active tab
      //todo debounce
    }
    return errors;
  };

  const onSubmit = (values: FormValuesType) => {
    const userData = {
      nickname: values.name,
      email: values.email,
      isEmailNotify: isEmailNotification,
      avatar: avatar as ImageOrVideo,
      country: values.country,
      role: values.role as UserRoleType,
    };

    dispatch(createAccount(userData, googleSign, navigateToEmailVerification))
  };

  const initialValues = {
    name: '',
    email: googleSign.email || '',
    isEmailNotification: true,
    avatar: '',
    country: authConfig.defaultCountry.toLocaleLowerCase(),
    role: authConfig.defaultRole,
  };

  const isEmailVerified = Boolean(googleSign?.id);

  return (
    <VStack flex={1}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validation}
        validateOnChange={false}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, }) => (
          <VStack flex={1}>
            <Tabs.Container
              renderTabBar={TabBar}
              headerContainerStyle={primaryStyles.tabHeader}
            >
              <Tabs.Tab label={'Your data'} name="A" >
                <Tabs.ScrollView>
                  <AccountData
                    values={values}
                    errors={errors}
                    isEmailVerified={isEmailVerified}
                    handleChange={handleChange}
                    onChangeAvatar={onChangeAvatar}
                  />
                </Tabs.ScrollView>
              </Tabs.Tab>
              <Tabs.Tab label={'Config'} name="B" >
                <Tabs.ScrollView>
                  <AccountConfig toggleEmailNotidication={toggleEmailNotidication} isEmailNotification={isEmailNotification} />
                </Tabs.ScrollView>
              </Tabs.Tab>
            </Tabs.Container>
            <ProceedButton
              handleSubmit={handleSubmit}
              title='Save and continue'
              subtitle='Form data required'
            />
          </VStack>
        )}
      </Formik>

    </VStack>
  )
}

const primaryStyles = StyleSheet.create({
  tabHeader: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
  },
});


export default CreateAccountForm
