import { useEffect, useState } from 'react'

// Definición del Activo (debe coincidir con el Backend)
interface Activo {
  nombre: string;
  tipo: string;
  numero_serie: string;
  datos_tecnicos: {
    presion: number;
    estado_estructural: string;
  };
  apto?: boolean;
  errores_validacion?: string[];
}

function App() {
  const [activos, setActivos] = useState<Activo[]>([]);
  const [nuevoActivo, setNuevoActivo] = useState<Activo>({
    nombre: '',
    tipo: 'Compresor',
    numero_serie: '',
    datos_tecnicos: { presion: 0, estado_estructural: 'Bueno' }
  });

  const cargarActivos = async () => {
    const res = await fetch('http://localhost:8000/activos');
    const data = await res.json();
    setActivos(data);
  };

  useEffect(() => {
    cargarActivos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8000/activos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoActivo)
    });
    setNuevoActivo({ ...nuevoActivo, nombre: '', numero_serie: '' });
    cargarActivos();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>DuoCert: Gestión de Activos</h1>

      {/* FORMULARIO SIMPLE */}
      <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ccc' }}>
        <h3>Registrar Inspección</h3>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Nombre" 
            value={nuevoActivo.nombre}
            onChange={e => setNuevoActivo({...nuevoActivo, nombre: e.target.value})}
            style={{ marginRight: '10px' }}
          />
          <input 
            placeholder="Nº Serie" 
            value={nuevoActivo.numero_serie}
            onChange={e => setNuevoActivo({...nuevoActivo, numero_serie: e.target.value})}
            style={{ marginRight: '10px' }}
          />
          <input 
            type="number" 
            placeholder="Presión (bar)"
            onChange={e => setNuevoActivo({
              ...nuevoActivo, 
              datos_tecnicos: {...nuevoActivo.datos_tecnicos, presion: Number(e.target.value)}
            })}
            style={{ width: '80px', marginRight: '10px' }}
          />
          <select 
            onChange={e => setNuevoActivo({
              ...nuevoActivo, 
              datos_tecnicos: {...nuevoActivo.datos_tecnicos, estado_estructural: e.target.value}
            })}
          >
            <option value="Bueno">Estado: Bueno</option>
            <option value="Deficiente">Estado: Deficiente</option>
          </select>
          <button type="submit" style={{ marginLeft: '10px' }}>Guardar</button>
        </form>
      </section>

      {/* LISTADO LIMPIO */}
      <section>
        <h3>Inventario de Activos</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {activos.map((a, i) => (
            <li key={i} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              <strong>{a.nombre}</strong> - {a.tipo} (S/N: {a.numero_serie})
              <span style={{ marginLeft: '15px', fontWeight: 'bold', color: a.apto ? 'green' : 'red' }}>
                {a.apto ? "[APTO]" : "[NO APTO]"}
              </span>
              
              {!a.apto && (
                <div style={{ color: 'red', fontSize: '0.85em', marginTop: '5px' }}>
                   ⚠️ {a.errores_validacion?.join(" | ")}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;