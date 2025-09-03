import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BackButton } from "@/components/ui/BackButton";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      subtitle="Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales."
      lastUpdated="16 de May, 2025"
    >
      <BackButton />
      <p>
        En <strong className="text-blue-primary font-bold">Agendux</strong>,
        respetamos tu privacidad y estamos comprometidos con la protección de
        tus datos personales. Esta política explica qué información recopilamos,
        cómo la usamos y cuáles son tus derechos.
      </p>
      <h3 className="subtittle-privacity">1. Información que recopilamos</h3>
      <p>
        Cuando utilizas nuestra aplicación, podemos recopilar la siguiente
        información:
      </p>
      <ul>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Tu nombre completo
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Dirección de correo electrónico
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Imagen de perfil (si accedes con Google)
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Información de uso dentro de la plataforma (agendas, fechas, tareas,
          etc.)
        </li>
      </ul>
      <p>
        <strong>Nota:</strong> Si inicias sesión con Google, solo accedemos a tu
        correo, nombre y foto de perfil, previa autorización.
      </p>
      <h3 className="subtittle-privacity">2. Uso de la información</h3>
      <p>Utilizamos tu información para:</p>
      <ul>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Identificarte dentro de la plataforma
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Personalizar tu experiencia de usuario
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Garantizar el funcionamiento adecuado del sistema
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Comunicarnos contigo si es necesario (por ejemplo, notificaciones de
          agenda)
        </li>
      </ul>
      <h3 className="subtittle-privacity">3. Almacenamiento y seguridad</h3>
      <p>
        Tu información se almacena en servidores seguros y se protege mediante
        medidas técnicas y organizativas adecuadas. No vendemos, compartimos ni
        transferimos tu información personal a terceros sin tu consentimiento
        explícito.
      </p>
      <h3 className="subtittle-privacity">4. Terceros</h3>
      <p>
        Usamos servicios de terceros (como Google OAuth) únicamente para
        autenticación. Estos servicios tienen sus propias políticas de
        privacidad.
      </p>
      <h3 className="subtittle-privacity">5. Derechos del usuario</h3>
      <p>Como usuario tienes derecho a:</p>
      <ul>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Acceder a tus datos personales
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Solicitar su corrección o eliminación
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Revocar tu consentimiento en cualquier momento
        </li>
      </ul>
      <p>
        Puedes ejercer estos derechos escribiéndonos a{" "}
        <a href="mailto:agendux.com@gmail.com" className="text-blue-secondary">
          agendux.com@gmail.com
        </a>
        .
      </p>
      <h3 className="subtittle-privacity">6. Cambios en esta política</h3>
      <p>
        Nos reservamos el derecho de modificar esta política de privacidad. Los
        cambios se comunicarán en esta misma página con al menos 7 días de
        antelación.
      </p>
      <h3 className="subtittle-privacity">7. Contacto</h3>
      <p>Para cualquier pregunta sobre esta política, contáctanos en:</p>
      <ul>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Correo:{" "}
          <a
            className="text-blue-secondary"
            href="mailto:agendux.com@gmail.com"
          >
            agendux.com@gmail.com
          </a>
        </li>
        <li className="text-font-secondary-light dark:text-font-secondary-dark">
          Sitio web:{" "}
          <Link className="text-blue-secondary" href="/">
            agendux.com
          </Link>
        </li>
      </ul>
    </LegalPageLayout>
  );
}
