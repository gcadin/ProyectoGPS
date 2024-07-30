import React, { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import '../index.css';

const DenunciaFilter = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [desdeFilter, setDesdeFilter] = useState('');
  const [hastaFilter, setHastaFilter] = useState('');

  const handleFilter = () => {
    onFilter({ search, tipoFilter, desdeFilter, hastaFilter });
  };

  const handleDateFromChange = (e) => {
    const newDateFrom = e.target.value;
    setDesdeFilter(newDateFrom);

    if (!hastaFilter || newDateFrom > hastaFilter) {
      setHastaFilter(new Date().toISOString().split('T')[0]);
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="filter-input"
              />
            </Col>
            <Col xs={12} md={3} className="mb-3">
              <Form.Control
                as="select"
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="filter-input"
              >
                <option value="">Todos los Tipos</option>
                <option value="Perdida de Mascotas">Pérdida de Mascotas</option>
                <option value="Negligencias">Negligencias</option>
                <option value="Animales Peligrosos">Animales Peligrosos</option>
                <option value="Maltrato Animal">Maltrato Animal</option>
                <option value="Abandono">Abandono</option>
                <option value="Sobreexplotación Animal">Sobreexplotación Animal</option>
                <option value="Otros">Otros</option>
              </Form.Control>
            </Col>
            <Col xs={12} md={2} className="mb-3">
              <Form.Control
                type="date"
                placeholder="Desde"
                value={desdeFilter}
                onChange={handleDateFromChange}
                className="filter-input"
              />
            </Col>
            <Col xs={12} md={2} className="mb-3">
              <Form.Control
                type="date"
                placeholder="Hasta"
                value={hastaFilter}
                onChange={(e) => setHastaFilter(e.target.value)}
                className="filter-input"
              />
            </Col>
            <Col xs={12} md={2} className="mb-3">
              <Button onClick={handleFilter} style={{ margin: '5px 0' }}>Filtrar</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DenunciaFilter;
