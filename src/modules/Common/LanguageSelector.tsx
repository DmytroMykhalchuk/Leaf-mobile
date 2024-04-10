import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from "@gluestack-ui/themed";

type LanguageSelectorType = {
    isOpen: boolean;
    onClose: () => void;
};

export const LanguageSelector: React.FC<LanguageSelectorType> = ({ isOpen, onClose }) => {

    const onSelectLanguage = (lang: string) => {
        onClose();
    };

    return (
        <Actionsheet
            isOpen={isOpen}
            onClose={onClose}
            zIndex={999}
        >
            <ActionsheetBackdrop />
            <ActionsheetContent h="$72" zIndex={999}>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <ActionsheetItem
                    onPress={() => onSelectLanguage('uk')}
                >
                    <ActionsheetItemText>Ukrainian</ActionsheetItemText>
                </ActionsheetItem>
            </ActionsheetContent>
        </Actionsheet>
    );
};