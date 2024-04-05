import { Box } from "@gluestack-ui/themed";
import { StyleSxProps } from "../../../constants/layout";

type CaroselDecarationType = {
};

export const CaroselDecaration: React.FC<CaroselDecarationType> = ({ }) => {

    return (
        <>
            <Box sx={styles.decoration} top={-12}/>
            <Box sx={styles.decoration} bottom={-24}/>
        </>
    );
};

const styles = {
    decoration: {
        position: 'absolute',
        width: '90%',
        height: 100,
        borderRadius: 42,
        backgroundColor: '$white',
        left: '5%',
        right: '5%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$black',
    }

} as StyleSxProps