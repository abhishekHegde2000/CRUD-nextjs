import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";

const Todo = () => {
    return (
        <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>Complete</TableCell>
            <TableCell className="space-x-2">
                <Button className="transition duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-950 cursor-pointer">
                    Delete
                </Button>
                <Button className="transition duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-950 cursor-pointer">
                    Update
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default Todo;
