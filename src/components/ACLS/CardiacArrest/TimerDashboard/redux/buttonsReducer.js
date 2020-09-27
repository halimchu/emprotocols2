const initialState = {
  CPR: 0,
  epi: 0,
  shock: 0,
  CPRCovid: 0,
  epiCovid: 0,
  shockCovid: 0,

  CPR_BWH: 0,
  epi_BWH: 0,
  shock_BWH: 0,
  CPRCovid_BWH: 0,
  epiCovid_BWH: 0,
  shockCovid_BWH: 0
}

export default function buttonsReducer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_EPI':
      return {
        ...state,
        epi: state.epi + 1
      }
    case 'INCREMENT_SHOCK':
      return {
        ...state,
        shock: state.shock + 1
      }
    case 'INCREMENT_CPR':
      return {
        ...state,
        CPR: state.CPR + 1
      }
    case 'RESET_CPR':
      return {
        ...state,
        CPR: 0
      }
    case 'RESET_SHOCK':
      return {
        ...state,
        shock: 0
      }
    case 'RESET_EPI':
      return {
        ...state,
        epi: 0
      }

    case 'INCREMENT_CPR_BWH':
      return {
        ...state,
        CPR_BWH: state.CPR_BWH + 1
      }
    case 'INCREMENT_EPI_BWH':
      return {
        ...state,
        epi_BWH: state.epi_BWH + 1
      }
    case 'INCREMENT_SHOCK_BWH':
      return {
        ...state,
        shock_BWH: state.shock_BWH + 1
      }

      case 'RESET_CPR_BWH':
        return {
          ...state,
          CPR_BWH: 0
        }
      case 'RESET_SHOCK_BWH':
        return {
          ...state,
          shock_BWH: 0
        }
      case 'RESET_EPI_BWH':
        return {
          ...state,
          epi_BWH: 0
        }
  
    


  // ======================Covid

    case 'INCREMENT_CPR_COVID':
      return {
        ...state,
        CPRCovid: state.CPRCovid + 1
      }
    case 'INCREMENT_EPI_COVID':
      return {
        ...state,
        epiCovid: state.epiCovid + 1
      }
    case 'INCREMENT_SHOCK_COVID':
      return {
        ...state,
        shockCovid: state.shockCovid + 1
      }

    case 'INCREMENT_CPR_COVID_BWH':
      return {
        ...state,
        CPRCovid_BWH: state.CPRCovid_BWH + 1
      }
    case 'INCREMENT_EPI_COVID_BWH':
      return {
        ...state,
        epiCovid_BWH: state.epiCovid_BWH + 1
      }
    case 'INCREMENT_SHOCK_COVID_BWH':
      return {
        ...state,
        shockCovid_BWH: state.shockCovid_BWH + 1
      }


    case 'RESET_CPR_COVID':
      return {
        ...state,
        CPRCovid: 0
      }
    case 'RESET_EPI_COVID':
      return {
        ...state,
        epiCovid: 0
      }
    case 'RESET_SHOCK_COVID':
      return {
        ...state,
        shockCovid: 0
      }
      
    case 'RESET_CPR_COVID_BWH':
      return {
        ...state,
        CPRCovid_BWH: 0
      }
    case 'RESET_EPI_COVID_BWH':
      return {
        ...state,
        epiCovid_BWH: 0
      }
    case 'RESET_SHOCK_COVID_BWH':
      return {
        ...state,
        shockCovid_BWH: 0
      }
    default:
      return state
  }
}