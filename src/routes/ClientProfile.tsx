import React from 'react'
import { CliProfile } from '../components/CliProfile'
import { useParams } from 'react-router-dom';
import { clientData } from '../helpers/data';

interface ClientsData{
  id:string;
  name:string;
  email: string;
  phone: string;
  address:string;
}

const ClientProfile:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const displayItems: ClientsData = clientData.find(
    (client) => client.id === id
  )!;
  return (
    <div>
        <CliProfile {...displayItems} />
    </div>
  )
}

export default ClientProfile