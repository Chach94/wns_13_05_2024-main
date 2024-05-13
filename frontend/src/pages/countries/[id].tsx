import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import Header from '@/components/Header';

const COUNTRY_QUERY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      id
      code
      emoji
      continent {
        name
        id
      }
    }
  }
`;

export default function CountryDetail(){
  const router = useRouter();
  const { code } = router.query;

  const { loading, error, data } = useQuery(COUNTRY_QUERY, {
    variables: { code },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur</p>;

  const { country } = data;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Code: {country.code}</p>
      <p>Emoji: {country.emoji}</p>
      {country.continent && <p>Continent: {country.continent.name}</p>}
    </div>
  );
};

