import { useDispatch, useSelector } from "react-redux";
import "./formModal.css";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { updateFormData } from "../../features/form_details/FormSlice";

const FormModal = () => {
    //GETTING SELECTED ID AND ALL USERDATA
    const selectedId = useSelector((state) => state.editId);
    const formDetails = useSelector((state) => state.form);

    //MATCHING ID WITH ALL USERDATA
    const selectedFormData = formDetails.find((data) => data.id === selectedId);

    //DISPATCH
    const dispatch = useDispatch();

    // USEFORM-HOOK
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // SETVALUE VIA USEFORM-HOOK
    const setFormData = () => {
        setValue("editid", selectedFormData.id);
        setValue("editusername", selectedFormData.username);
        setValue("editusermail", selectedFormData.usermail);
        setValue("editgender", selectedFormData.gender);
        setValue("edithobby", selectedFormData.hobby);
        setValue("editqualification", selectedFormData.qualification);
        setValue("editusercomment", selectedFormData.usercomment);
    };

    //AUTO CLOSE ON UPDATE-BTN CLICK
    const modalClose = useRef(null);

    //SET DATA TO FORM VALUES
    useEffect(() => {
        if (selectedFormData) {
            setFormData();
        }
    }, [selectedFormData]);

    return (
        <section className="modal-section">
            <div
                className="modal fade"
                id="editModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Form Data
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                ref={modalClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form
                                onSubmit={handleSubmit((data) => {
                                    const updatenewData = {
                                        createdAt: selectedFormData.createdAt,

                                        updateAt: new Date().toLocaleString(
                                            "en-IN",
                                            {
                                                timeZone: "Asia/Kolkata",
                                            }
                                        ),
                                        ...data,
                                    };
                                    // console.log(updatenewData);
                                    dispatch(
                                        updateFormData({
                                            id: selectedFormData.id,
                                            updatedData: updatenewData,
                                        })
                                    );
                                    modalClose.current.click();
                                    toast.success("Data Updated!", {
                                        position: "top-center",
                                        autoClose: 1000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "dark",
                                    });
                                })}
                            >
                                <input
                                    type="hidden"
                                    name="editid"
                                    {...register("editid")}
                                />
                                {/* USER-NAME  */}
                                <div>
                                    <div className="form-element">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="editusername"
                                                className="form-label"
                                            >
                                                FULLNAME
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="editusername"
                                                name="editusername"
                                                {...register("editusername", {
                                                    required:
                                                        "Please Enter Name",
                                                    minLength: {
                                                        value: 5,
                                                        message:
                                                            "Name must be at least 5 characters long",
                                                    },
                                                    maxLength: {
                                                        value: 20,
                                                        message:
                                                            "Name cannot exceed 10 characters",
                                                    },
                                                })}
                                            />
                                            {errors.editusername && (
                                                <small className="text-danger">
                                                    {
                                                        errors.editusername
                                                            .message
                                                    }
                                                </small>
                                            )}
                                        </div>
                                        {/* USER-MAIL  */}
                                        <div className="mb-3">
                                            <label
                                                htmlFor="editusermail"
                                                className="form-label"
                                            >
                                                E-MAIL
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="editusermail"
                                                name="editusermail"
                                                {...register("editusermail", {
                                                    required:
                                                        "Please Enter E-mail",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message:
                                                            "Invalid email comment",
                                                    },
                                                })}
                                            />
                                            {errors.editusermail && (
                                                <small className="text-danger">
                                                    {
                                                        errors.editusermail
                                                            .message
                                                    }
                                                </small>
                                            )}
                                        </div>
                                        {/* USER-GENDER  */}
                                        <div className="mb-3">
                                            <label className="form-label d-block">
                                                GENDER
                                            </label>

                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="editgender"
                                                    id="editgenderMale"
                                                    value="male"
                                                    {...register("editgender", {
                                                        required: true,
                                                    })}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="editgenderMale"
                                                >
                                                    Male
                                                </label>
                                            </div>
                                            {/* USER-HOBBIES  */}
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="editgender"
                                                    id="editgenderFemale"
                                                    value="female"
                                                    {...register("editgender", {
                                                        required: true,
                                                    })}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="editgenderFemale"
                                                >
                                                    Female
                                                </label>
                                            </div>
                                            {errors.editgender && (
                                                <small className="text-danger d-block">
                                                    Please Select Gender
                                                </small>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label d-block">
                                                HOBBIES
                                            </label>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="edithobby"
                                                    id="editgames"
                                                    value="games"
                                                    {...register("edithobby", {
                                                        required:
                                                            "Please Select Atleast One Hobby",
                                                    })}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="editgames"
                                                >
                                                    Games
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="edithobby"
                                                    id="editmedia"
                                                    value="media"
                                                    {...register("edithobby", {
                                                        required:
                                                            "Please Select Atleast One Hobby",
                                                    })}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="editmedia"
                                                >
                                                    Social Media
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="edithobby"
                                                    id="editreading"
                                                    value="reading"
                                                    {...register("edithobby", {
                                                        required:
                                                            "Please Select Atleast One Hobby",
                                                    })}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="editreading"
                                                >
                                                    Reading
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="edithobby"
                                                    id="editLearning"
                                                    value="learning"
                                                    {...register("edithobby", {
                                                        required:
                                                            "Please Select Atleast One Hobby",
                                                    })}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="editLearning"
                                                >
                                                    Learning
                                                </label>
                                            </div>
                                            {errors.edithobby && (
                                                <small className="text-danger d-block">
                                                    {errors.edithobby.message}
                                                </small>
                                            )}
                                        </div>
                                        {/* USER-QUALIFICATION */}
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="editqualification"
                                            >
                                                QUALIFICATION
                                            </label>
                                            <select
                                                className="form-select"
                                                id="editqualification"
                                                name="editqualification"
                                                aria-label="Default select example"
                                                {...register(
                                                    "editqualification",
                                                    {
                                                        required:
                                                            "Please Select Qualification",
                                                    }
                                                )}
                                            >
                                                <option value="">
                                                    --select--
                                                </option>
                                                <option value="school">
                                                    School Level
                                                </option>
                                                <option value="diploma">
                                                    Diploma
                                                </option>
                                                <option value="bachelor">
                                                    Bachelor's degree
                                                </option>
                                                <option value="master">
                                                    Master’s degree
                                                </option>
                                                <option value="doctorateorPhD">
                                                    Doctorate or PhD
                                                </option>
                                            </select>
                                            {errors.editqualification && (
                                                <small className="text-danger">
                                                    {
                                                        errors.editqualification
                                                            .message
                                                    }
                                                </small>
                                            )}
                                        </div>
                                        {/* USER-COMMENTS */}
                                        <div className="mb-3">
                                            <label
                                                htmlFor="editusercomment"
                                                className="form-label"
                                            >
                                                COMMENTS
                                                <small className="text-white-50">
                                                    (Optional)
                                                </small>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="editusercomment"
                                                name="usercomment"
                                                rows="2"
                                                {...register("editusercomment")}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-cancel"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-update"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormModal;
