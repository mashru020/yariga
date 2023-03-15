import { useState } from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { FieldValue, FieldValues, useForm } from '@pankod/refine-react-hook-form';
import { useNavigate } from '@pankod/refine-react-router-v6';

import Form from 'components/common/Form';
import { readFile } from 'fs';
import { PropertyCard } from 'components';

// kichu bujhini (1) => start (reading file and then reading data from it and set it in the state)
const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user} = useGetIdentity();
  const [propertyImage, setPropertyImage] = useState({name:'', url:''})
  const { refineCore: {onFinish, formLoading}, register, handleSubmit} = useForm();
  
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile); 
    });

    reader(file).then((result: string) => setPropertyImage({name: file?.name, url:result}));
  }
// kichu bujhini (1) => end
  const onFinishHandler = async (data: FieldValues) => {
    if(!propertyImage.name) return alert('please select an image');
    await onFinish({...data, photo: propertyImage.url, email: user.email})
  }
  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
    />
  )
}

export default CreateProperty