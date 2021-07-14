import customStyles from "../../../utils/customStyles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useToken } from "../../../providers/TokenProvider/";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";

export const Experience = () => {
  const { userId } = useToken();

  const schema = yup.object().shape({
    role: yup.string().required("Role required"),
    company: yup.string().required("Company required"),
    dateFrom: yup.string().required("Starting data required"),
    dateTo: yup.string().required("Finish data required"),
    description: yup.string().required("Description required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFunction = () => {};

  return (
    <Container>
      <form>
        <h2>Add Experience</h2>
        <Input
          name="role"
          placeHolder="Role"
          type="text"
          register={register}
          error={errors.role?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="company"
          placeHolder="Company"
          type="text"
          register={register}
          error={errors.company?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="dateFrom"
          placeHolder="Date From"
          type="text"
          register={register}
          error={errors.dateFrom?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="dateTo"
          placeHolder="Date To"
          type="text"
          register={register}
          error={errors.dateTo?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="description"
          placeHolder="Description"
          type="text"
          register={register}
          error={errors.description?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <div className="buttonBox">
          <Button
            type="submit"
            setSize="large"
            setColor="var(--blue)"
            setClick={handleSubmit(submitFunction)}
          >
            Submit
          </Button>
          <Button setSize="large" setColor="var(--red)" setClick={""}>
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
};
