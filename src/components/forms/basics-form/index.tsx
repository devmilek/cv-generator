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
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

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
    <Form {...form}>
      <form className="grid gap-4">
        <FormField
          name="imageSrc"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <div className="size-20 bg-accent rounded-full flex items-center justify-center overflow-hidden">
                {field.value ? (
                  <Image
                    unoptimized
                    src={field.value}
                    alt="Profile image"
                    width={20}
                    height={20}
                    className="rounded-full size-full"
                  />
                ) : (
                  <ImageIcon className="size-4" />
                )}
              </div>
              <div className="flex-1">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input className="mt-1" {...field} />
                </FormControl>
              </div>
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
        </div>
      </form>
    </Form>
  );
};

export default BasicsForm;
