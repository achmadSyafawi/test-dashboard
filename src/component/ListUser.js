import React, { useEffect, useState } from "react";
import { Table, Pagination } from "@mantine/core";

const ListUser = () => {
  const [elements, setElements] = useState([]);
  const [elementPage, setElementPage] = useState([]);
  const [paging, setPaging] = useState(5);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await fetch(`https://fakestoreapi.com/users`);
    const resJson = await response.json();
    if (response.status === 200) {
      setElements(resJson);
    }
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>action</Table.Td>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.username}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.password}</Table.Td>
      <Table.Td>{`${element.name.firstname} ${element.name.lastname}`}</Table.Td>
      <Table.Td>{`${element.address.city}`}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Pagination
        total={elements.length / 5}
        value={paging}
        onChange={(data) => {
          setPaging(data);
        }}
      />
      <Table horizontalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Action</Table.Th>
            <Table.Th>Id</Table.Th>
            <Table.Th>Username</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Password</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Address</Table.Th>
            <Table.Th>Phone</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default ListUser;
