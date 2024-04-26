import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm("");
    const [dataF, setDataF] = useState({});
    const [viewer, setViewer] = useState(0);
    const onSubmit = (data) => {
      console.log(data); // log all data
      console.log(data.fullName); // log only fullname
      // update hooks
      setDataF(data);
      setViewer((dataF.viewer = 1));
    };

    function viewAll () {



        return (
            <div>
                <p>Hello World</p>
            </div>
        );



    }




    return (
        <div>
          {viewer === 0 && <viewAll />}
          {viewer === 1 && <Summary />}
        </div>
      );





}