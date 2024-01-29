import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import axios from "axios";

function MainCategory() {

    const [categories, setCategories] = useState([])

    async function getCategory() {
        try {
          const response = await axios.get("http://127.0.0.1:5000/categories");
          console.log(response)
          setCategories(response.data)
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(()=> {
        getCategory()
    }, [])

  return (
    <Container>
        <h3 className="text-center mb-4">Browse Categories</h3>
        <Row>
        {
          categories?.map((c) => {
            return (
              <Col xs={12} sm={6} md={3} className="mb-2 p-2" key={c.id}>
                <CategoryCard category={c} />
              </Col>
            );
          })}
        </Row>
    </Container>
  )
}

export default MainCategory;