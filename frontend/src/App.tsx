import { useEffect, useState } from 'react'

// --- CONFIGURACIÓN DE ESTILOS Y COLORES ---
const COLORES = {
  primario: '#0056b3',    // Azul DuoTech
  secundario: '#f39c12',  // Naranja Edición/Seguridad
  exito: '#27ae60',       // Verde APTO
  error: '#e74c3c',       // Rojo NO APTO
  fondo: '#f4f7f6',
  blanco: '#ffffff'
};

const CONFIG_TIPOS: any = {
  'Compresor': { color: '#3498db', icono: '🌬️' },
  'Elevador': { color: '#9b59b6', icono: '🏗️' },
  'Cabina': { color: '#e67e22', icono: '🚗' },
};

// --- INTERFACES ---
interface Activo {
  id?: string;
  nombre: string;
  tipo: string;
  numero_serie: string;
  datos_tecnicos: any;
  apto?: boolean;
  errores_validacion?: string[];
}

function App() {
  const [activos, setActivos] = useState<Activo[]>([]);
  const [editandoId, setEditandoId] = useState<string | null>(null);

  // Estados del Formulario
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('Compresor');
  const [nSerie, setNSerie] = useState('');
  const [datosTecnicos, setDatosTecnicos] = useState<any>({});

  const cargarActivos = async () => {
    try {
      const res = await fetch('http://localhost:8000/activos');
      const data = await res.json();
      setActivos(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error cargando inventario:", err);
    }
  };

  useEffect(() => { cargarActivos(); }, []);

  // --- LÓGICA DE EDICIÓN ---
  const prepararEdicion = (a: Activo) => {
    setEditandoId(a.id || null);
    setNombre(a.nombre);
    setTipo(a.tipo);
    setNSerie(a.numero_serie);
    setDatosTecnicos(a.datos_tecnicos || {});
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Sube al formulario
  };

  const cancelarEdicion = () => {
    setEditandoId(null);
    setNombre('');
    setTipo('Compresor');
    setNSerie('');
    setDatosTecnicos({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const activoData = { nombre, tipo, numero_serie: nSerie, datos_tecnicos: datosTecnicos };

    const url = editandoId ? `http://localhost:8000/activos/${editandoId}` : 'http://localhost:8000/activos';
    const metodo = editandoId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activoData)
      });
      if (res.ok) {
        cancelarEdicion();
        cargarActivos();
      }
    } catch (err) {
      alert("Error al procesar la solicitud");
    }
  };

  return (
    <div style={{ backgroundColor: COLORES.fondo, minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: COLORES.primario, color: 'white', padding: '20px 40px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0 }}>🛡️ DuoCert | <span style={{fontWeight: 'normal'}}>Gestión de Activos DuoTech</span></h1>
      </header>

      <main style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* FORMULARIO DE REGISTRO / EDICIÓN */}
        <section style={{ 
          backgroundColor: 'white', 
          padding: '25px', 
          borderRadius: '15px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          borderTop: `6px solid ${editandoId ? COLORES.secundario : COLORES.primario}`
        }}>
          <h2 style={{ marginTop: 0, color: editandoId ? COLORES.secundario : COLORES.primario }}>
            {editandoId ? `✏️ Editando: ${nombre}` : '📝 Nueva Inspección Técnica'}
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '15px' }}>
              <div>
                <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Tipo:</label>
                <select value={tipo} onChange={e => { setTipo(e.target.value); setDatosTecnicos({}); }} style={{ width: '100%', padding: '10px', borderRadius: '5px' }}>
                  <option value="Compresor">🌬️ Compresor</option>
                  <option value="Elevador">🏗️ Elevador</option>
                  <option value="Cabina">🚗 Cabina Pintura</option>
                </select>
              </div>
              <div>
                <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Nombre del Activo:</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} required style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Nº Serie:</label>
                <input value={nSerie} onChange={e => setNSerie(e.target.value)} required style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} />
              </div>
            </div>

            {/* CAMPOS DINÁMICOS */}
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px dashed #ccc' }}>
              <p style={{marginTop: 0, fontWeight: 'bold'}}>⚙️ Parámetros Técnicos Requeridos:</p>
              
              {tipo === 'Compresor' && (
                <label>Presión (bar): <input type="number" step="0.1" value={datosTecnicos.presion || ''} onChange={e => setDatosTecnicos({presion: Number(e.target.value)})} required /></label>
              )}
              {tipo === 'Elevador' && (
                <div style={{ display: 'flex', gap: '20px' }}>
                  <label>Carga (kg): <input type="number" value={datosTecnicos.carga_maxima || ''} onChange={e => setDatosTecnicos({...datosTecnicos, carga_maxima: Number(e.target.value)})} required /></label>
                  <label>Frenos: 
                    <select value={datosTecnicos.estado_frenos || ''} onChange={e => setDatosTecnicos({...datosTecnicos, estado_frenos: e.target.value})} required>
                      <option value="">--Seleccionar--</option>
                      <option value="Verificado">Verificado</option>
                      <option value="No Verificado">No Verificado</option>
                    </select>
                  </label>
                </div>
              )}
              {tipo === 'Cabina' && (
                <label>Caudal Ventilador (m³/h): <input type="number" value={datosTecnicos.caudal_ventilacion || ''} onChange={e => setDatosTecnicos({caudal_ventilacion: Number(e.target.value)})} required /></label>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={{ 
                flex: 2, padding: '15px', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer',
                backgroundColor: editandoId ? COLORES.secundario : COLORES.primario
              }}>
                {editandoId ? '💾 GUARDAR CAMBIOS' : '🚀 REGISTRAR E INSPECCIONAR'}
              </button>
              {editandoId && (
                <button type="button" onClick={cancelarEdicion} style={{ flex: 1, backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                  CANCELAR
                </button>
              )}
            </div>
          </form>
        </section>

        {/* INVENTARIO */}
        <section style={{ marginTop: '40px' }}>
          <h2 style={{ color: COLORES.primario, borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>📋 Inventario de Activos</h2>
          <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
            {activos.map((a, i) => {
              const config = CONFIG_TIPOS[a.tipo] || { color: '#666', icono: '❓' };
              return (
                <div key={i} style={{ 
                  backgroundColor: 'white', padding: '20px', borderRadius: '12px', borderLeft: `10px solid ${config.color}`,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.5em' }}>{config.icono}</span>
                      <h3 style={{ margin: 0, color: '#333' }}>{a.nombre} <small style={{ fontWeight: 'normal', color: '#666' }}>({a.tipo})</small></h3>
                    </div>
                    <div style={{ fontSize: '0.9em', color: '#888', marginTop: '5px' }}>S/N: {a.numero_serie}</div>
                    
                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {a.datos_tecnicos && Object.entries(a.datos_tecnicos).map(([k, v]: any) => (
                        <span key={k} style={{ backgroundColor: '#f0f0f0', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8em' }}>
                          <strong>{k.replace('_', ' ')}:</strong> {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', minWidth: '180px' }}>
                    <div style={{ 
                      color: a.apto ? COLORES.exito : COLORES.error, 
                      fontWeight: 'bold', fontSize: '1em', marginBottom: '10px' 
                    }}>
                      {a.apto ? '● APTO / CERTIFICABLE' : '● NO APTO / FALLO'}
                    </div>
                    <button 
                      onClick={() => prepararEdicion(a)}
                      style={{ padding: '8px 15px', backgroundColor: '#eee', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      ✏️ Editar Activo
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;