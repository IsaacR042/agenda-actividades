function ActivityForm() {
  return (
    <section>
      <h2>Nueva actividad</h2>

      <form>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Nombre de la actividad"
          />
        </div>

        <div>
          <label htmlFor="fecha">Fecha de entrega</label>
          <input
            id="fecha"
            type="date"
          />
        </div>

        <div>
          <label htmlFor="notas">Notas</label>
          <textarea
            id="notas"
            placeholder="Información adicional"
          />
        </div>

        <button type="submit">
          Agregar actividad
        </button>
      </form>
    </section>
  );
}

export default ActivityForm;