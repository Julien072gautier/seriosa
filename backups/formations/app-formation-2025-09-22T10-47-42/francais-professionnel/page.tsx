import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationFrancaisProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="francais-professionnel" />
      <FormationPage slug="francais-professionnel" />
    </>
  );
};

export default FormationFrancaisProfessionnelPage;