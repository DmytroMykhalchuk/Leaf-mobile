import { Button, ButtonText, Heading, Pressable, Text, VStack } from '@gluestack-ui/themed'
import React, { useState } from 'react'
import { StyleSheet, TextInput, Touchable } from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'
import { StyleSxProps } from '../../constants/layout'
import { TabBar } from './Elements/TabBar'
import { Formik } from 'formik'
import { AccountData } from './Elements/AccountData'
import { ProceedButton } from './Elements/ProceedButton'
import { AccountConfig } from './Elements/AccountConfig'
import { ImageOrVideo } from 'react-native-image-crop-picker'
import { useDispatch, useSelector } from 'react-redux'
import { createAccount } from '../../store/auth/authReducer'
import { GoogleSignType } from '../../store/auth/authTypes'
import { getGoogleSign } from '../../store/auth/authSelector'

type FormValuesType = {
  name: string;
  email: string;
  avatar: string;
};

type FormErrorType = {
  name?: string;
  email?: string;
  avatar?: string;
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
    }else{
      
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
    };

    dispatch(createAccount(userData, googleSign, navigateToEmailVerification))
  };

  const isEmailVerified = Boolean(googleSign?.id);
  return (
    <VStack flex={1}>
      <Formik
        initialValues={{
          name: '',
          email: googleSign.email || '',
          isEmailNotification: true,
          avatar: '',
        }}
        onSubmit={onSubmit}
        validate={validation}
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
            <ProceedButton handleSubmit={handleSubmit} />
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

const styles = {

} as StyleSxProps;

export default CreateAccountForm
