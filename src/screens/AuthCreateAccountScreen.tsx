import CreateAccountForm from '../modules/Auth/CreateAccountForm';
import { AuthRootStackList } from '../routes/AuthRoutes';
import { Button, ButtonText, Text, VStack } from '@gluestack-ui/themed';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useRef } from 'react';

type AuthCreateAccountScreenType = StackScreenProps<AuthRootStackList, 'AuthCreateAccountScreen'>;

export const AuthCreateAccountScreen: React.FC<AuthCreateAccountScreenType> = ({ }) => {
    return (
        <VStack flex={1} pt={'$5'}>
            <CreateAccountForm />
            <Button action={"primary"} variant={"outline"} size={"md"}>
                <ButtonText>
                    Button
                </ButtonText>
            </Button>
        </VStack>
    );
};