import { useEffect } from "react";
import "./userForm.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { submitForm } from "../../features/form_details/FormSlice";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
    // USEFORM-HOOK
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // USESELECTOR
    const formSlice = useSelector((state) => state.form);

    // LOGGING FORMDATA
    // useEffect(() => {
    //     // console.log(formSlice);
    // }, [formSlice]);

    // USEDISPATCH
    const dispatch = useDispatch();

    return (
        <>
            <section className="form-section d-flex justify-content-center align-items-center">
                <div className="container">
                    {/* FORM  */}
                    <form
                        className="row justify-content-center"
                        onSubmit={handleSubmit((data) => {
                            const newData = {
                                id: uuidv4(),
                                createdAt: new Date().toLocaleString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                }),
                                updateAt: new Date().toLocaleString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                }),
                                ...data,
                            };
                            dispatch(submitForm(newData));
                            reset();
                            toast.success("Form submitted !", {
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
                        <div className="col-md-6">
                            <div className="form-elements">
                                {/* USER-NAME  */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="form-label"
                                    >
                                        FULLNAME
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        {...register("username", {
                                            required: "Please Enter Name",
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
                                    {errors.username && (
                                        <small className="text-danger">
                                            {errors.username.message}
                                        </small>
                                    )}
                                </div>
                                {/* USER-MAIL  */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="usermail"
                                        className="form-label"
                                    >
                                        E-MAIL
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="usermail"
                                        name="usermail"
                                        {...register("usermail", {
                                            required: "Please Enter E-mail",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message:
                                                    "Invalid email comment",
                                            },
                                        })}
                                    />
                                    {errors.usermail && (
                                        <small className="text-danger">
                                            {errors.usermail.message}
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
                                            name="gender"
                                            id="genderMale"
                                            value="male"
                                            {...register("gender", {
                                                required: true,
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="genderMale"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    {/* USER-HOBBIES  */}
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="genderFemale"
                                            {...register("gender", {
                                                required: true,
                                            })}
                                            value="female"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="genderFemale"
                                        >
                                            Female
                                        </label>
                                    </div>
                                    {errors.gender && (
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
                                            name="hobby"
                                            id="games"
                                            value="games"
                                            {...register("hobby", {
                                                required:
                                                    "Please Select Atleast One Hobby",
                                            })}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="games"
                                        >
                                            Games
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="hobby"
                                            id="media"
                                            value="media"
                                            {...register("hobby")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="media"
                                        >
                                            Social Media
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="hobby"
                                            id="reading"
                                            value="reading"
                                            {...register("hobby")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="reading"
                                        >
                                            Reading
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="hobby"
                                            id="Learning"
                                            value="learning"
                                            {...register("hobby")}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="Learning"
                                        >
                                            Learning
                                        </label>
                                    </div>
                                    {errors.hobby && (
                                        <small className="text-danger d-block">
                                            {errors.hobby.message}
                                        </small>
                                    )}
                                </div>
                                {/* USER-QUALIFICATION */}
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="qualification"
                                    >
                                        QUALIFICATION
                                    </label>
                                    <select
                                        className="form-select"
                                        id="qualification"
                                        name="qualification"
                                        aria-label="Default select example"
                                        {...register("qualification", {
                                            required:
                                                "Please Select Qualification",
                                        })}
                                    >
                                        <option value="">--select--</option>
                                        <option value="school">
                                            School Level
                                        </option>
                                        <option value="diploma">Diploma</option>
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
                                    {errors.qualification && (
                                        <small className="text-danger">
                                            {errors.qualification.message}
                                        </small>
                                    )}
                                </div>
                                {/* USER-COMMENTS */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="usercomment"
                                        className="form-label"
                                    >
                                        COMMENTS
                                        <small className="text-white-50">
                                            (Optional)
                                        </small>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="usercomment"
                                        name="usercomment"
                                        rows="2"
                                        {...register("usercomment")}
                                    ></textarea>
                                </div>
                                <div className="mt-4 text-center">
                                    <button
                                        className="btn submit-btn"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default UserForm;
