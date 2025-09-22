import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationAllemandProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="allemand-professionnel" />
      <FormationPage slug="allemand-professionnel" />
    </>
  );
};

export default FormationAllemandProfessionnelPage;