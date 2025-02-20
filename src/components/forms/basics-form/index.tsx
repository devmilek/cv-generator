"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BasicsFormFields, useCVStore } from "@/stores/cv-store";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AvatarPicker from "./avatar-picker";
import { User } from "@phosphor-icons/react/dist/ssr";

const BasicsForm = () => {
  const { updateBasics, basics } = useCVStore();
  const form = useForm<BasicsFormFields>({
    values: {
      ...basics,
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      // Update store whenever form values change
      updateBasics(value as BasicsFormFields);
    });

    return () => subscription.unsubscribe();
  }, [form, form.watch, updateBasics]);

  return (
    <div>
      <header className="mb-5 flex items-center gap-4">
        <User className="size-5" />
        <div>
          <h2 className="text-2xl font-bold">Basics</h2>
          <p className="text-muted-foreground text-sm">
            Add your personal information. This will be displayed at the top of
            your CV.
          </p>
        </div>
      </header>
      <Form {...form}>
        <form className="grid gap-4">
          <FormField
            name="imageSrc"
            control={form.control}
            render={() => (
              <FormItem className="">
                <div>
                  <AvatarPicker />
                </div>
              </FormItem>
            )}
          />
          <FormField
            name="jobTitle"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              name="country"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="website"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default BasicsForm;
