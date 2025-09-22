import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationRusseProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="russe-professionnel" />
      <FormationPage slug="russe-professionnel" />
    </>
  );
};

export default FormationRusseProfessionnelPage;