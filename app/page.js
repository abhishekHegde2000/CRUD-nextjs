"use client";

import Todo from "@/components/Todo";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"


export default function Home() {
    const { toast } = useToast();
    const [todos, setTodos] = useState({
        title: "",
        description: "",
    });

    const setTitle = (e) => {
        setTodos({ ...todos, title: e.target.value });
    };

    const setDescription = (e) => {
        setTodos({ ...todos, description: e.target.value });
    };

    const reset = () => {
        setTodos({ title: "", description: "" });
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            // api code

            toast({
                title: "Todo Added",
                description: "Todo Added Successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            reset();
        } catch (err) {

            toast({
                title: "Error",
                description: "Something went wrong",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <section className="w-full md:w-[70%] py-25 px-2 mx-auto ">
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter Title"
                            value={todos.title}
                            onChange={setTitle}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black resize-none"
                            placeholder="give a small Description"
                            rows={5}
                            cols={20}
                            value={todos.description}
                            onChange={setDescription}
                        />
                    </div>
                    <Button className="transition duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-700 cursor-pointer">
                        Add ToDo
                    </Button>
                </form>
                <Table>
                    <TableCaption>A list of ToDos</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Id</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[...Array(10)].map((_, index) => (
                            <Todo key={index} />
                        ))}
                    </TableBody>
                </Table>

            </section>
        </>
    );
}
