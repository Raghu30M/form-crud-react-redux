import "./formDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { handleId } from "../../features/edit_id/editId";
import { deleteData } from "../../features/form_details/FormSlice";
import { useState } from "react";

const FormDetails = () => {
    let sNo = 0;

    const [nodata, setnodata] = useState(true);

    // USESELECTOR-HOOK
    const formData = useSelector((state) => state.form);

    //USEDISPATCH
    const dispatch = useDispatch();

    //HANDLE-EDITFORM
    const handleEditForm = (id) => dispatch(handleId(id));

    //HANDLE-DELETE
    const handleDelete = (id) => {
        dispatch(deleteData(id));
        toast.success("Data Deleted !", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <section className="form-details-section my-5">
            <div className="container">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>USER NAME</th>
                                <th>USER MAIL-ID</th>
                                <th>GENDER</th>
                                <th>HOBBIES</th>
                                <th>QUALIFICATION</th>
                                <th>COMMENTS</th>
                                <th>SUBMITTED DATE-TIME</th>
                                <th>UPDATED DATE-TIME</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.length ? (
                                formData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{++sNo}</td>
                                        <td>{data.username}</td>
                                        <td>{data.usermail}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.hobby.join(", ")}</td>
                                        <td>{data.qualification}</td>
                                        <td>{data.usercomment}</td>
                                        <td>{data.createdAt}</td>
                                        <td>{data.updateAt}</td>
                                        <td>
                                            <button
                                                id={data.id}
                                                data-bs-toggle="modal"
                                                data-bs-target="#editModal"
                                                onClick={() =>
                                                    handleEditForm(data.id)
                                                }
                                            >
                                                <MdEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                id={data.id}
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                            >
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9">No Data Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default FormDetails;
