import { formatDistance, parseISO } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt'

const formatDate = (date) => {
  try {
    const parse = parseISO(date)      
    const now = zonedTimeToUtc(new Date(), 'America/Sao_Paulo')      
    const dateFormatted = formatDistance( parse, now, {locale: pt})

    return `Há ${dateFormatted}`;
  } catch (error) {
    return 'Data não disponível';
  }    
}

export default formatDate;