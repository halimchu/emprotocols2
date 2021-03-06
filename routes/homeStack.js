// import { createStackNavigator } from 'react-navigation-stack'


// import Home from '../src/components/Home'

// import MGHHome from '../src/components/MGH/MGHHome'
// import ACLSHomeBWH from '../src/components/ACLS/ACLSHomeBWH'
// import ACLSHomeMGH from '../src/components/ACLS/ACLSHomeMGH'
// import CardiacArrestCOVIDMGH from '../src/components/ACLS/CardiacArrest/MGH/CardiacArrestCOVIDMGH'
// import CardiacArrestMGH from '../src/components/ACLS/CardiacArrest/MGH/CardiacArrestMGH'
// import CardiacArrest from '../src/components/ACLS/CardiacArrest/BWH/CardiacArrest'
// import CardiacArrestCOVID from '../src/components/ACLS/CardiacArrest/BWH/CardiacArrestCOVID'
// import ECMOOne from '../src/components/ACLS/CardiacArrest/MGH/ECMOOne'
// import ECMOTwo from '../src/components/ACLS/CardiacArrest/MGH/ECMOTwo'
// import Bradycardia from '../src/components/ACLS/Bradycardia/Bradycardia'
// import Tachycardia from '../src/components/ACLS/Tachycardia/Tachycardia'
// import PostCardiacArrestCare from '../src/components/ACLS/PostCardiacArrestCare/PostCardiacArrestCare'
// import ADMGH from '../src/components/MGH/AorticDissection/ADMGH'
// import ADInitialStepsMGH from '../src/components/MGH/AorticDissection/ADInitialStepsMGH'
// import RICUMGH from '../src/components/MGH/DifficultAirway/RICUMGH'
// import PertMGH from '../src/components/MGH/Pert/PertMGH'
// import PERTNextStepsMGH from '../src/components/MGH/Pert/PertNextStepsMGH'
// import STEMIMGH from '../src/components/MGH/STEMI/STEMIMGH'
// import STEMINextStepsMGH from '../src/components/MGH/STEMI/STEMINextStepsMGH'
// import StrokeMGH from '../src/components/MGH/Stroke/StrokeMGH'
// import TraumaMGH from '../src/components/MGH/Trauma/TraumaMGH'
// import MTPMGH from '../src/components/MGH/MTP/MTPMGH'
// import MTPNextStepsMGH from '../src/components/MGH/MTP/MTPNextStepsMGH'

// import BWHHome from '../src/components/BWH/BWHHome'
// import ADBWH from '../src/components/BWH/AorticDissection/ADBWH'
// import ADInitialStepsBWH from '../src/components/BWH/AorticDissection/ADInitialStepsBWH'
// import FirstPagePE from '../src/components/BWH/Pert/FirstPagePE'
// import SecondPageYesPEBWH from '../src/components/BWH/Pert/SecondPageYesPEBWH'
// import SecondPageNoPEBWH from '../src/components/BWH/Pert/SecondPageNoPEBWH'
// import ThirdPageNoPEBWH from '../src/components/BWH/Pert/ThirdPageNoPEBWH'
// import FourthPagePEBWH from '../src/components/BWH/Pert/FourthPagePEBWH'
// import ThirdPageYESPEBWH from '../src/components/BWH/Pert/ThirdPageYESPEBWH'
// import RICUBWH from '../src/components/BWH/DifficultAirway/RICUBWH'
// import STEMIBWH from '../src/components/BWH/STEMI/STEMIBWH'
// import STEMIPageBWH from '../src/components/BWH/STEMI/STEMIPageBWH'
// import STEMIUncertainBWH from '../src/components/BWH/STEMI/STEMIUncertainBWH'
// import STEMILastBWH from '../src/components/BWH/STEMI/STEMILastBWH'
// import StrokeBWH from '../src/components/BWH/Stroke/StrokeBWH'
// import EmergencyBloodReleaseBWH from '../src/components/BWH/MTP/EmergencyBloodReleaseBWH'
// import MTPBWH from '../src/components/BWH/MTP/MTPBWH'
// import MassiveTransfusionProtocolBWH from '../src/components/BWH/MTP/MassiveTransfusionProtocolBWH'
// import MTPNextStepsBWH from '../src/components/BWH/MTP/MTPNextStepsBWH'
// import MTPNextStepsRememberBWH from '../src/components/BWH/MTP/MTPNextStepsRememberBWH'
// import TraumaBWH from '../src/components/BWH/Trauma/TraumaBWH'
// import TraumaSceneUndesignatedBWH from '../src/components/BWH/Trauma/SceneUndesignated/SceneUndesignated'
// import TraumaTransferBWH from '../src/components/BWH/Trauma/Transfer/Transfer'

// import COVIDHomeMGH from '../src/components/MGH/COVID/COVIDHomeMGH'
// import COVIDHomeBWH from '../src/components/BWH/COVID/COVIDHomeBWH'
// import COVIDDispoMGH from '../src/components/MGH/COVID/COVIDDispoMGH'
// import COVIDWorkflowMGH from '../src/components/MGH/COVID/COVIDWorkflowMGH'
// import ClinicalManagementMGH from '../src/components/MGH/COVID/ClinicalManagementMGH'
// import ClinicalManagementBWH from '../src/components/BWH/COVID/ClinicalManagementBWH'
// import COVIDTestingCriteriaMGH from '../src/components/MGH/COVID/COVIDTestingCriteriaMGH'

// import COVIDWorkflowBWH from '../src/components/BWH/COVID/COVIDWorkflowBWH'
// import COVIDDispoBWH from '../src/components/BWH/COVID/COVIDDispoBWH'


// const HomeStack = createStackNavigator({
//   Home: { screen: Home },
//   MGHHome: { screen: MGHHome },
//   BWHHome: { screen: BWHHome },
//   ACLSHomeBWH: { screen: ACLSHomeBWH },
//   ACLSHomeMGH: { screen: ACLSHomeMGH },
//   CardiacArrest: { screen: CardiacArrest },
//   CardiacArrestCOVID: { screen: CardiacArrestCOVID },
//   CardiacArrestCOVIDMGH: { screen: CardiacArrestCOVIDMGH },
//   CardiacArrestMGH: { screen: CardiacArrestMGH },
//   ECMOOne: { screen: ECMOOne },
//   ECMOTwo: { screen: ECMOTwo },
//   Bradycardia: { screen: Bradycardia },
//   Tachycardia: { screen: Tachycardia },
//   PostCardiacArrestCare: { screen: PostCardiacArrestCare },
//   ADMGH: { screen: ADMGH },
//   ADBWH: { screen : ADBWH },
//   ADInitialStepsBWH: { screen: ADInitialStepsBWH },
//     PertMGH: { screen: PertMGH },
//     PERTNextStepsMGH: { screen: PERTNextStepsMGH },
//     FirstPagePE: { screen: FirstPagePE },
//     SecondPageYesPEBWH: { screen: SecondPageYesPEBWH },
//     SecondPageNoPEBWH: { screen: SecondPageNoPEBWH },
//     ThirdPageNoPEBWH: { screen: ThirdPageNoPEBWH },
//     FourthPagePEBWH: { screen: FourthPagePEBWH },
//     ThirdPageYESPEBWH: { screen: ThirdPageYESPEBWH },
//   RICUMGH: { screen: RICUMGH },
//   ADInitialStepsMGH: { screen: ADInitialStepsMGH },
//   RICUBWH: { screen: RICUBWH },
//   STEMIMGH: { screen: STEMIMGH },
//   STEMINextStepsMGH: { screen: STEMINextStepsMGH },
//   STEMIBWH: { screen: STEMIBWH },
//   STEMIPageBWH: { screen: STEMIPageBWH },
//   STEMIUncertainBWH: { screen: STEMIUncertainBWH },
//   STEMILastBWH: { screen: STEMILastBWH },
//   StrokeMGH: { screen: StrokeMGH },
//   StrokeBWH: { screen: StrokeBWH },
//   TraumaMGH: { screen: TraumaMGH },
//   TraumaBWH: { screen: TraumaBWH },
//   TraumaSceneUndesignatedBWH: { screen: TraumaSceneUndesignatedBWH},
//   TraumaTransferBWH: { screen:  TraumaTransferBWH },
//   MTPMGH: { screen: MTPMGH },
//   MTPNextStepsMGH: { screen: MTPNextStepsMGH},
//   MTPBWH: { screen: MTPBWH },
//   EmergencyBloodReleaseBWH: { screen: EmergencyBloodReleaseBWH },
//   MassiveTransfusionProtocolBWH: { screen: MassiveTransfusionProtocolBWH },
//   MTPNextStepsBWH: { screen: MTPNextStepsBWH },
//   MTPNextStepsRememberBWH: { screen: MTPNextStepsRememberBWH},
//   COVIDHomeMGH: { screen: COVIDHomeMGH },
//   COVIDHomeBWH: { screen: COVIDHomeBWH },
//   ClinicalManagementMGH: { screen: ClinicalManagementMGH },
//   ClinicalManagementBWH: { screen: ClinicalManagementBWH },

//   COVIDWorkflowMGH: { screen: COVIDWorkflowMGH },
//   COVIDWorkflowBWH: { screen: COVIDWorkflowBWH },
//   COVIDDispoMGH: { screen: COVIDDispoMGH },
//   COVIDDispoBWH: { screen: COVIDDispoBWH },
//   COVIDTestingCriteriaMGH: { screen: COVIDTestingCriteriaMGH }
// })

// export default HomeStack








