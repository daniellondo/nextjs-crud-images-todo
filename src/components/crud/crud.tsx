"use client";
import { BaseSyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";

interface Person {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export default function Crud() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>(); 

  const [people, setPerson] = useState<Person[]>([]);
  
  const [valid, setValid] = useState<boolean>(false);
  let index: number = 0;

  const onSubmit = (
    data: Person,
    event?: BaseSyntheticEvent<object, HTMLElement, HTMLElement>
  ) => {
    if (event) event.preventDefault();
    data.id = index++;
    setPerson([...people, data]);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          People Crud
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                {...register("name", { required: true })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && <span>This field is required</span>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                {...register("lastName", { required: true })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && <span>This field is required</span>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                {...register("email", { required: true })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              {person.name} {person.lastName} {person.email}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
