import React from 'react'
import Nav from "react-bootstrap/Nav";
import { listContainer } from './listContainer';

export const ItemListContainer = () => {
  return (
    <Nav className="me-auto">
      {listContainer.map((item) => (
        <>
          <Nav.Link
            key={item.id}
            href={item.link}
            className="text-light"
          >
            {item.name} 
          </Nav.Link>
        </>
      ))}
    </Nav>
  );
}
