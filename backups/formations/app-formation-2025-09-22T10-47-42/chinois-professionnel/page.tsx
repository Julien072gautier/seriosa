import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationChinoisProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="chinois-professionnel" />
      <FormationPage slug="chinois-professionnel" />
    </>
  );
};

export default FormationChinoisProfessionnelPage;