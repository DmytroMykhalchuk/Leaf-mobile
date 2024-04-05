import { Heading, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'
import { StyleSxProps } from '../../constants/layout'
import { TabBar } from './Elements/TabBar'
import { Formik } from 'formik'
import { AccountData } from './Elements/AccountData'


const CreateAccountForm: React.FC = () => {

  return (
    <VStack flex={1}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Tabs.Container
            renderTabBar={TabBar}
            headerContainerStyle={primaryStyles.tabHeader}
          >
            <Tabs.Tab label={'Your data'} name="A" >
              <Tabs.ScrollView>
                <AccountData/>
              </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab label={'Config'} name="B" >
              <Tabs.ScrollView>
                <Text>fdsg</Text>
              </Tabs.ScrollView>
            </Tabs.Tab>
          </Tabs.Container>
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
