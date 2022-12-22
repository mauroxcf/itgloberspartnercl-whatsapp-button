import React from 'react'
import PropTypes from 'prop-types';
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  logo: string,
  phone: string,
  message: string,
  width: number,
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  const CSS_HANDLES = ["whatsappButton-container"]
  const handles = useCssHandles(CSS_HANDLES)
  const formattedMessage = message.replace(/ /g, "%20")
  return (
    <div className={`${handles["whatsappButton-container"]} fixed bottom-2 right-2 flex flexColumn`}>
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel='noreferrer noopener'
      >
        <img src={logo} alt="Logo de Whatsapp" width={width} height={height} />
      </a>
    </div>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: "my-logo.png",
  phone: "300507575",
  message: "Estas comunicándote con VTEX university",
  width: 60,
  height: 60
}
WhatsappButton.schema = {
  title: "Whatsapp button",
  type: "object",
  properties: {
    logo: {
      title: "logo de whatsapp que se relacione con la marca",
      type: "object",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega por favor el numero de teléfono",
      type: "string",
    },
    message: {
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se vera para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "largo del icono",
      description: "Agrega por favor un numero para definir el alto",
      type: "number",
    },
    height: {
      title: "alto del icono",
      description: "Agrega por favor un numero para definir el ancho",
      type: "number",
    }
  }
}

export default WhatsappButton