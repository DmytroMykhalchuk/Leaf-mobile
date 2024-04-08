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

type FormValuesType = {
  name: string;
  email: string;
};

type FormErrorType = {
  name?: string;
  email?: string;
};

const CreateAccountForm: React.FC = () => {
  const isEmailVerified = true;
  const [isEmailNotification, setIsEmailNotification] = useState(true);

  const toggleEmailNotidication = () => setIsEmailNotification((prev: boolean) => !prev);

  const validation = (values: FormValuesType) => {
    const errors = {} as FormErrorType;

    if (!values.name.length) {
      errors.name = 'Required';
    }

    if (!values.email.length) {
      errors.email = 'Required';
    }

    if(errors){
      //todo  check active tab
    }
    return errors;
  }

  return (
    <VStack flex={1}>
      <Formik
        initialValues={{ email: '', name: '', isEmailNotification: true, }}
        onSubmit={values => console.log(values)}
        validateOnChange
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
