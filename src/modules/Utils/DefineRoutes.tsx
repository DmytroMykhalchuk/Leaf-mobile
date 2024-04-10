import { useSelector } from "react-redux";
import { getIsAuthorized } from "../../store/user/userSelector";
import { AppRoutes } from "../../routes/AppRoutes";
import { AuthRoutes } from "../../routes/AuthRoutes";

type DefineRoutesType = {
};

export const DefineRoutes: React.FC<DefineRoutesType> = ({ }) => {
    const isAuthorized = useSelector(getIsAuthorized)

    if (isAuthorized) {
        return (
            <AppRoutes />
        );
    }
    
    return (
        <AuthRoutes />
    );
};