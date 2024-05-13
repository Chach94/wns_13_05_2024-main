import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_COUNTRY = gql`
  mutation AddCountry($name: String!, $emoji: String!, $code: String!) {
    addCountry(name: $name, emoji: $emoji, code: $code) {
      id
      name
      emoji
      code
    }
  }`
;

const CountryForm = () => {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [code, setCode] = useState('');
  const [createCountry] = useMutation(CREATE_COUNTRY);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const { data } = await createCountry({
        variables: {
          name,
          emoji,
          code
        }
      });
      console.log('Country created:', data.createCountry);
      // Reset form fields after successful submission
      setName('');
      setEmoji('');
      setCode('');
    } catch (error) {
      console.error('Error creating country:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CountryForm;