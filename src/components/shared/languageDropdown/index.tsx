import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { languages } from "../../../assets/data";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ILanguages } from "../../../common/types";

export default function LanguageDropdown() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<ILanguages>(languages.find((el) => el.code == i18n.language) as ILanguages)

    return (
        <Select
            size='sm'
            defaultSelectedKeys={[selectedLanguage?.country_code as string]}
            aria-label="Language"
            className="w-1/3 lg:w-1/6"
            disallowEmptySelection
            startContent={<Avatar alt="Flag" className="w-6 h-6" src={selectedLanguage.image} />}

        >
            {languages.map((element: ILanguages) => (
                <SelectItem

                    onClick={() => { i18n.changeLanguage(element.code); setSelectedLanguage(element) }}

                    key={element.country_code}
                    startContent={<Avatar alt="Flag" className="w-6 h-6" src={element.image} />}
                >
                    {element.name}
                </SelectItem>
            ))}
        </Select>
    );
}