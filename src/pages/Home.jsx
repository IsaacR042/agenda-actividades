import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

function Home() {
  return (
    <main>
      <section>
        <h2>Mi agenda</h2>

        <p>
          Organiza tus actividades, fechas de entrega y pendientes.
        </p>
      </section>

      <ActivityForm />

      <ActivityList />
    </main>
  );
}

export default Home;