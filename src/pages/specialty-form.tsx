import { NextPage } from "next";
import { Form, useForm } from "react-hook-form";

const SpecialtyForm: NextPage<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="postalCode">郵便番号: </label>
          <input
            id="postalCode"
            {...register("postalCode", {
              required: "必須項目です",
              pattern: {
                value: /^\d{7}$/,
                message: "郵便番号は7桁の数字で指定してください",
              },
            })}
          />
          <p>{errors.postalCode?.message as string}</p>
        </div>
        <div>
          <label htmlFor="localSpecialty">特産品: </label>
          <input
            id="localSpecialty"
            {...register("localSpecialty", {
              required: "必須項目です",
            })}
          />
          <p>{errors.localSpecialty?.message as string}</p>
        </div>
        <button type="submit">送信</button>
      </form>
    </>
  );
};
export default SpecialtyForm;
