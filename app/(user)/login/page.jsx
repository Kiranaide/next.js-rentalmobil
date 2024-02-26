"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Invalid Credentials");
      }
      const { token } = await response.json();

      localStorage.setItem("token", token);
      console.log("Login Successfully");
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form
        className="space-y-8"
        onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="namamobil">Username</Label>
          <Input
            placeholder="Masukkan Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Masukkan Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button
          variant="outline"
          type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
