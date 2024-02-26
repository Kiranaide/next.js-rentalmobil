"use client";
import fetchUser from "@/app/api/Users";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await fetchUser();
      setData(result);
    }
    getData();
  }, []);

  const router = useRouter();
  return (
    <div className="flex flex-col justify-center">
      <Button
        variant="outline"
        onClick={() => router.push("/admin/adduser")}>
        Tambah Data
      </Button>
      <Table>
        <TableCaption>Test Title</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 &&
            data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.username}</TableCell>
                <TableCell>{d.level}</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
