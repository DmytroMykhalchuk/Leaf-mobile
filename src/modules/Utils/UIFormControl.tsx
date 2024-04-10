import { AlertCircleIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Input } from '@gluestack-ui/themed';

type UIFormControlType = {
    children: JSX.Element;
    helperText?: string;
    error?: string;
    label?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
};

export const UIFormControl: React.FC<UIFormControlType> = ({ label, children, helperText, error, isRequired, isDisabled }) => {

    return (
        <FormControl isInvalid={Boolean(error)} isRequired={isRequired} isDisabled={isDisabled}>
            {
                label &&
                <FormControlLabel>
                    <FormControlLabelText>{label}</FormControlLabelText>
                </FormControlLabel>
            }
            {children}
            {
                helperText &&
                <FormControlHelper>
                    <FormControlHelperText>
                        What would you like people to call you?
                    </FormControlHelperText>
                </FormControlHelper>
            }
            {
                error &&
                <FormControlError>
                    <FormControlErrorText>
                       {error}
                    </FormControlErrorText>
                </FormControlError>
            }
        </FormControl>
    );
};