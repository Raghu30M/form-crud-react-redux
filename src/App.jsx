import "./App.css";
import UserForm from "./components/userform/UserForm";
import FormDetails from "./components/formdetails/FormDetails";
import FormModal from "./components/formeditmodal/FormModal";
import { ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <UserForm />
            <FormDetails />
            <FormModal />
            <ToastContainer />
        </>
    );
}
export default App;
