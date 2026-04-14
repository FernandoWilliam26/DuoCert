import { useEffect, useState } from 'react'

interface Activo {
  nombre: string;
  tipo: string;
  numero_serie: string;
  estado?: string;
}

function App() {
  const [activos, setActivos] = useState<Activo[]>([]);
  const [nuevoActivo, setNuevoActivo] = useState<Activo>({
    nombre: '',
    tipo: '',
    numero_serie: ''
  });

  const cargarActivos = async () => {
    try {
      const response = await fetch('http://localhost:8000/activos');
      const data = await response.json();
      setActivos(data);
    } catch (error) {
      console.error("Error cargando activos:", error);
    }
  };

  useEffect(() => {
    cargarActivos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:8000/activos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoActivo)
      });
      setNuevoActivo({ nombre: '', tipo: '', numero_serie: '' });
      cargarActivos();
    } catch (error) {
      alert("Error al guardar");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>DuoCert: Gestión de Activos</h1>

      {/* --- FORMULARIO --- */}
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Registrar Nuevo Activo</h2>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Nombre (ej: Compresor 1)" 
            value={nuevoActivo.nombre}
            onChange={e => setNuevoActivo({...nuevoActivo, nombre: e.target.value})}
            style={{ marginRight: '10px' }}
          />
          <input 
            placeholder="Tipo (ej: Elevador)" 
            value={nuevoActivo.tipo}
            onChange={e => setNuevoActivo({...nuevoActivo, tipo: e.target.value})}
            style={{ marginRight: '10px' }}
          />
          <input 
            placeholder="Nº Serie" 
            value={nuevoActivo.numero_serie}
            onChange={e => setNuevoActivo({...nuevoActivo, numero_serie: e.target.value})}
            style={{ marginRight: '10px' }}
          />
          <button type="submit">Guardar Activo</button>
        </form>
      </section>

      {/* --- LISTADO --- */}
      <section>
        <h2>Inventario de Activos</h2>
        <ul>
          {activos.map((a, index) => (
            <li key={index}>
              <strong>{a.nombre}</strong> - {a.tipo} (S/N: {a.numero_serie}) 
              <span style={{ color: 'green', marginLeft: '10px' }}>● {a.estado}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App