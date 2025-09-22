import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationArabeProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="arabe-professionnel" />
      <FormationPage slug="arabe-professionnel" />
    </>
  );
};

export default FormationArabeProfessionnelPage;