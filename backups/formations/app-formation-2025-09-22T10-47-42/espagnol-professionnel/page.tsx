import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationEspagnolProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="espagnol-professionnel" />
      <FormationPage slug="espagnol-professionnel" />
    </>
  );
};

export default FormationEspagnolProfessionnelPage;