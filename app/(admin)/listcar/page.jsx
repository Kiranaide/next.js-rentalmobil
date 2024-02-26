"use client";
import fetchData from "@/app/api/CarData";
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
      const result = await fetchData();
      setData(result);
    }
    getData();
  }, []);

  const router = useRouter();
  return (
    <div className="flex flex-col justify-center">
      <Button
        variant="outline"
        onClick={() => router.push("/addcar")}>
        Tambah Data
      </Button>
      <Table>
        <TableCaption>Test Title</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Mobil</TableHead>
            <TableHead>Keadaan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 &&
            data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.namamobil}</TableCell>
                <TableCell>{d.keadaan}</TableCell>
                <TableCell>{d.status}</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
