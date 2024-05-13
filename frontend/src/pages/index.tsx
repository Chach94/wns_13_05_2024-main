import Header from "@/components/Header";
import Card from "@/components/Card"; 
import { Countries } from "@/types";
import { gql, useQuery } from "@apollo/client";
import Form from "@/components/Form";
import styles from '@/styles/Card.module.css'; 


const COUNTRIES_QUERY = gql`
  query {
    countries {
      name
      emoji
      code
    }
  }
`;
export default function Home() {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur 😔 </p>;

  return (
    <div>
      <Header/>
      <Form />
      <div className= {styles.globalCard}>
        {data.countries.map((country:any) => (
          <Card key={country.id} id={country.id} name={country.name} emoji={country.emoji} code={country.code}></Card>
        ))}
      </div>
    </div>
  );
 
}
