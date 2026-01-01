import {
  Hospital,
  HeartHandshake,
  Building2,
  Users,
  User,
  FilePenLine,
  LucideIcon,
  Activity, // Кардіологія (серцебиття)
  Brain, // Неврологія
  Baby, // Педіатрія + УЗД для дітей
  Heart, // Загальне для здоров'я / Мамологія
  Stethoscope, // Загальна медична іконка / Сімейна медицина
  Eye, // Офтальмологія
  Ear, // Оториноларингологія
  Scan, // МРТ / КТ / Рентген
  Monitor, // УЗД (як моніторинг)
  Syringe, // Вакцинація
  TestTube, // Лабораторія / Аналізи
  Bone, // Травматологія
  Flower, // Алергологія (як пилок)
  Droplets, // Ендокринологія / Гормони / Флебологія
  Venus, // Гінекологія (символ жіночого)
  Scissors, // Хірургія
  Wind, // Пульмонологія (дихання)
  Hand, // Ревматологія (суглоби)
  Search, // Ендоскопія / Діагностика
  Goal, // Проктологія (як ціль)
} from "lucide-react";

// Types heaader info
export interface IAdditional {
  ua: string;
  en: string;
  link: string;
  icon?: LucideIcon;
  seo: {
    ua: { title: string; description: string };
    ru: { title: string; description: string };
  };
}

export interface IMainServices {
  title: string;
  link: string;
  additional?: IAdditional[];
  icon: LucideIcon;
}

export const services: IAdditional[] = [
  // --- Диагностические процедуры ---
  {
    ua: "МРТ",
    en: "MRI",
    link: "/mrt",
    icon: Scan,
    seo: {
      ua: {
        title: "МРТ — магнітно-резонансна томографія",
        description:
          "Сучасна МРТ діагностика для точної оцінки стану органів та систем.",
      },
      ru: {
        title: "МРТ — магнитно-резонансная томография",
        description:
          "Современная МРТ диагностика для точного обследования организма.",
      },
    },
  },
  {
    ua: "КТ",
    en: "CT Scan",
    link: "/ct",
    icon: Scan,
    seo: {
      ua: {
        title: "КТ — комп’ютерна томографія",
        description:
          "Швидка та точна комп’ютерна томографія з мінімальним променевим навантаженням.",
      },
      ru: {
        title: "КТ — компьютерная томография",
        description:
          "Быстрая и точная компьютерная томография для детальной диагностики.",
      },
    },
  },
  {
    ua: "УЗД",
    en: "Ultrasound",
    link: "/ultrasound",
    icon: Monitor,
    seo: {
      ua: {
        title: "УЗД — ультразвукова діагностика",
        description: "Безпечне ультразвукове обстеження внутрішніх органів.",
      },
      ru: {
        title: "УЗИ — ультразвуковая диагностика",
        description:
          "Безопасное ультразвуковое исследование внутренних органов.",
      },
    },
  },
  {
    ua: "УЗД для дітей",
    en: "Pediatric Ultrasound",
    link: "/ultrasound-pediatric",
    icon: Baby,
    seo: {
      ua: {
        title: "УЗД для дітей",
        description:
          "Делікатна та безпечна ультразвукова діагностика для дітей.",
      },
      ru: {
        title: "УЗИ для детей",
        description: "Безопасное и щадящее УЗИ обследование для детей.",
      },
    },
  },
  {
    ua: "Рентгенографія",
    en: "X-ray",
    link: "/xray",
    icon: Scan,
    seo: {
      ua: {
        title: "Рентгенографія",
        description:
          "Рентгенологічні дослідження з високою точністю результатів.",
      },
      ru: {
        title: "Рентгенография",
        description: "Рентгенологические исследования с высокой точностью.",
      },
    },
  },
  {
    ua: "Ендоскопія",
    en: "Endoscopy",
    link: "/endoscopy",
    icon: Search,
    seo: {
      ua: {
        title: "Ендоскопія",
        description: "Ендоскопічна діагностика шлунково-кишкового тракту.",
      },
      ru: {
        title: "Эндоскопия",
        description: "Эндоскопическая диагностика органов пищеварения.",
      },
    },
  },
  {
    ua: "Лабораторні послуги",
    en: "Laboratory Services",
    link: "/laboratory-services",
    icon: TestTube,
    seo: {
      ua: {
        title: "Лабораторні аналізи",
        description: "Широкий спектр лабораторних досліджень.",
      },
      ru: {
        title: "Лабораторные анализы",
        description: "Широкий спектр лабораторных исследований.",
      },
    },
  },

  // --- Специалисты / отделения ---
  {
    ua: "Кардіологія",
    en: "Cardiology",
    link: "/cardiology",
    icon: Activity,
    seo: {
      ua: {
        title: "Кардіологія",
        description:
          "Діагностика та лікування захворювань серцево-судинної системи.",
      },
      ru: {
        title: "Кардиология",
        description: "Диагностика и лечение заболеваний сердца и сосудов.",
      },
    },
  },
  {
    ua: "Неврологія",
    en: "Neurology",
    link: "/neurology",
    icon: Brain,
    seo: {
      ua: {
        title: "Неврологія",
        description: "Лікування та діагностика захворювань нервової системи.",
      },
      ru: {
        title: "Неврология",
        description: "Диагностика и лечение заболеваний нервной системы.",
      },
    },
  },
  {
    ua: "Педіатрія",
    en: "Pediatrics",
    link: "/pediatrician",
    icon: Baby,
    seo: {
      ua: {
        title: "Педіатрія",
        description: "Медичний супровід та лікування дітей різного віку.",
      },
      ru: {
        title: "Педиатрия",
        description: "Медицинское наблюдение и лечение детей.",
      },
    },
  },
  {
    ua: "Гінекологія",
    en: "Gynecology",
    link: "/gynecology",
    icon: Venus,
    seo: {
      ua: {
        title: "Гінекологія",
        description:
          "Діагностика, профілактика та лікування гінекологічних захворювань.",
      },
      ru: {
        title: "Гинекология",
        description:
          "Диагностика, профилактика и лечение гинекологических заболеваний.",
      },
    },
  },
  {
    ua: "Травматологія",
    en: "Traumatology",
    link: "/traumatology",
    icon: Bone,
    seo: {
      ua: {
        title: "Травматологія",
        description:
          "Лікування травм опорно-рухового апарату та наслідків ушкоджень.",
      },
      ru: {
        title: "Травматология",
        description: "Лечение травм опорно-двигательного аппарата.",
      },
    },
  },
  {
    ua: "Ревматологія",
    en: "Rheumatology",
    link: "/rheumatology",
    icon: Hand,
    seo: {
      ua: {
        title: "Ревматологія",
        description:
          "Діагностика та лікування ревматичних і аутоімунних захворювань.",
      },
      ru: {
        title: "Ревматология",
        description:
          "Диагностика и лечение ревматических и аутоиммунных заболеваний.",
      },
    },
  },
  {
    ua: "Офтальмологія",
    en: "Ophthalmology",
    link: "/ophthalmology",
    icon: Eye,
    seo: {
      ua: {
        title: "Офтальмологія",
        description: "Діагностика та лікування захворювань органів зору.",
      },
      ru: {
        title: "Офтальмология",
        description: "Диагностика и лечение заболеваний органов зрения.",
      },
    },
  },
  {
    ua: "Оториноларингологія",
    en: "Otolaryngology",
    link: "/otolaryngology",
    icon: Ear,
    seo: {
      ua: {
        title: "Оториноларингологія",
        description: "Лікування захворювань вуха, горла та носа.",
      },
      ru: {
        title: "Оториноларингология",
        description: "Лечение заболеваний уха, горла и носа.",
      },
    },
  },
  {
    ua: "Алергологія",
    en: "Allergology",
    link: "/allergology",
    icon: Flower,
    seo: {
      ua: {
        title: "Алергологія",
        description: "Діагностика та лікування алергічних захворювань.",
      },
      ru: {
        title: "Аллергология",
        description: "Диагностика и лечение аллергических заболеваний.",
      },
    },
  },
  {
    ua: "Ендокринологія",
    en: "Endocrinology",
    link: "/endocrinology",
    icon: Droplets,
    seo: {
      ua: {
        title: "Ендокринологія",
        description: "Лікування порушень гормональної та ендокринної системи.",
      },
      ru: {
        title: "Эндокринология",
        description: "Диагностика и лечение заболеваний эндокринной системы.",
      },
    },
  },
  {
    ua: "Гастроентерологія",
    en: "Gastroenterology",
    link: "/gastroenterology",
    icon: HeartHandshake,
    seo: {
      ua: {
        title: "Гастроентерологія",
        description:
          "Діагностика та лікування захворювань шлунково-кишкового тракту.",
      },
      ru: {
        title: "Гастроэнтерология",
        description:
          "Диагностика и лечение заболеваний желудочно-кишечного тракта.",
      },
    },
  },
  {
    ua: "Сімейна медицина",
    en: "Family Medicine",
    link: "/family-medicine",
    icon: Stethoscope,
    seo: {
      ua: {
        title: "Сімейна медицина",
        description: "Комплексний медичний супровід для всієї родини.",
      },
      ru: {
        title: "Семейная медицина",
        description: "Комплексное медицинское обслуживание для всей семьи.",
      },
    },
  },
  {
    ua: "Урологія",
    en: "Urology",
    link: "/urology",
    icon: Droplets,
    seo: {
      ua: {
        title: "Урологія",
        description:
          "Діагностика та лікування захворювань сечостатевої системи.",
      },
      ru: {
        title: "Урология",
        description: "Диагностика и лечение заболеваний мочеполовой системы.",
      },
    },
  },
  {
    ua: "Пульмонологія",
    en: "Pulmonology",
    link: "/pulmonology",
    icon: Wind,
    seo: {
      ua: {
        title: "Пульмонологія",
        description: "Лікування захворювань органів дихання.",
      },
      ru: {
        title: "Пульмонология",
        description: "Диагностика и лечение заболеваний органов дыхания.",
      },
    },
  },
  {
    ua: "Хірургія",
    en: "Surgery",
    link: "/surgery",
    icon: Scissors,
    seo: {
      ua: {
        title: "Хірургія",
        description: "Планові та ургентні хірургічні втручання.",
      },
      ru: {
        title: "Хирургия",
        description: "Плановые и экстренные хирургические вмешательства.",
      },
    },
  },
  {
    ua: "Мамологія",
    en: "Mammology",
    link: "/mammology",
    icon: Heart,
    seo: {
      ua: {
        title: "Мамологія",
        description: "Діагностика та профілактика захворювань молочних залоз.",
      },
      ru: {
        title: "Маммология",
        description: "Диагностика и профилактика заболеваний молочных желез.",
      },
    },
  },
  {
    ua: "Дерматовенерологія",
    en: "Dermatovenereology",
    link: "/dermatovenerology",
    icon: Droplets,
    seo: {
      ua: {
        title: "Дерматовенерологія",
        description: "Лікування захворювань шкіри, волосся та нігтів.",
      },
      ru: {
        title: "Дерматовенерология",
        description: "Диагностика и лечение заболеваний кожи.",
      },
    },
  },
  {
    ua: "Проктологія",
    en: "Proctology",
    link: "/proctology",
    icon: Goal,
    seo: {
      ua: {
        title: "Проктологія",
        description: "Діагностика та лікування захворювань прямої кишки.",
      },
      ru: {
        title: "Проктология",
        description: "Диагностика и лечение заболеваний прямой кишки.",
      },
    },
  },
  {
    ua: "Флебологія",
    en: "Phlebology",
    link: "/phlebology",
    icon: Droplets,
    seo: {
      ua: {
        title: "Флебологія",
        description: "Лікування варикозної хвороби та патологій вен.",
      },
      ru: {
        title: "Флебология",
        description: "Диагностика и лечение заболеваний вен.",
      },
    },
  },

  // --- Профилактика и пакеты ---
  {
    ua: "Вакцинація",
    en: "Vaccination",
    link: "/vaccination",
    icon: Syringe,
    seo: {
      ua: {
        title: "Вакцинація",
        description: "Профілактичні щеплення для дітей та дорослих.",
      },
      ru: {
        title: "Вакцинация",
        description: "Профилактические прививки для детей и взрослых.",
      },
    },
  },
  // {
  //   ua: "Пакетні пропозиції",
  //   en: "Package Offers",
  //   link: "/packages",
  //   icon: FileSearch,
  //   seo: {
  //     ua: {
  //       title: "Пакетні медичні послуги",
  //       description: "Комплексні програми обстежень за вигідною вартістю.",
  //     },
  //     ru: {
  //       title: "Пакетные медицинские услуги",
  //       description: "Комплексные программы обследований по выгодной цене.",
  //     },
  //   },
  // },
];

// Additional information
export const declaration: IAdditional[] = [
  {
    ua: "Для дорослого",
    en: "For adults",
    link: "",
    icon: User,
    seo: {
      ua: {
        title: "Обстеження для дорослих — діагностика та консультація",
        description:
          "Медичне обстеження для дорослих: сучасна діагностика, точні результати та консультація спеціаліста.",
      },
      ru: {
        title: "Обследование для взрослых — диагностика и консультация",
        description:
          "Медицинское обследование для взрослых: современная диагностика, точные результаты и консультация специалиста.",
      },
    },
  },
  {
    ua: "Для дитини (до 14 років)",
    en: "For children (up to 14 years)",
    link: "",
    icon: Baby,
    seo: {
      ua: {
        title: "Обстеження для дітей до 14 років — безпечно та точно",
        description:
          "Медичне обстеження для дітей до 14 років з урахуванням вікових особливостей, безпечно та інформативно.",
      },
      ru: {
        title: "Обследование для детей до 14 лет — безопасно и точно",
        description:
          "Медицинское обследование для детей до 14 лет с учетом возрастных особенностей, безопасно и информативно.",
      },
    },
  },
];

// Main services list
export const mainServices: IMainServices[] = [
  {
    title: "Медичні центри",
    link: "/medical-centers",
    icon: Building2,
  },
  {
    title: "Госпіталь",
    link: "/hospital",
    icon: Hospital,
  },
  {
    title: "Наші лікарі",
    link: "/doctors",
    icon: Users,
  },
  {
    title: "Послуги",
    link: "/services",
    icon: Stethoscope,
    additional: services,
  },
  // {
  //   title: "Блог",
  //   link: "/blog",
  //   icon: FileText,
  // },
  {
    title: "Підписання декларацій",
    link: "/declaration",
    icon: FilePenLine,
    additional: declaration,
  },
];

// Direction of work
export const directionOfWork = [
  {
    id: 1,
    title: "Госпіталізація",
    desc: "Ми надаємо послуги стаціонарного лікування в комфортних палатах з цілодобовим медичним наглядом. Пацієнти отримують комплексну діагностику, лікування та реабілітацію під контролем кваліфікованих фахівців.",
    icon: Hospital,
    link: "/hospital",
  },
  {
    id: 2,
    title: "Вакцинація",
    desc: "У нашій клініці проводиться вакцинація дорослих та дітей відповідно до національного календаря щеплень та індивідуальних потреб. Використовуємо тільки сертифіковані та якісні вакцини від провідних виробників.",
    icon: Syringe,
    link: "/service/vaccination",
  },
  {
    id: 3,
    title: "Сімейна медицина",
    desc: "Сімейний лікар — ваш особистий медичний супровідник для всієї родини. Ми пропонуємо профілактичні огляди, ведення хронічних захворювань, видачу довідок та направлень, а також консультації з питань здорового способу життя.",
    icon: Stethoscope,
    link: "/service/family-medicine",
  },
  {
    id: 4,
    title: "Гінекологія",
    desc: "Комплексна гінекологічна допомога: профілактичні огляди, діагностика та лікування жіночих захворювань, планування вагітності, ведення вагітності, консультації з контрацепції та менопаузи.",
    icon: Venus,
    link: "/service/gynecology",
  },
  {
    id: 5,
    title: "Хірургія",
    desc: "Проведення малоінвазивних та планових хірургічних втручань, амбулаторних операцій, видалення новоутворень, лікування варикозу та інших хірургічних патологій з використанням сучасного обладнання.",
    icon: Venus,
    link: "/service/surgery",
  },
  {
    id: 6,
    title: "Наші послуги",
    desc: "Повний спектр медичних послуг: від первинної консультації та діагностики до спеціалізованого лікування та реабілітації. Ми дбаємо про ваше здоров’я на всіх етапах.",
    icon: HeartHandshake,
    link: "/services",
  },
];
