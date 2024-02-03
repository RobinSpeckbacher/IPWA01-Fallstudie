import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel, { formLabelClasses } from "@mui/joy/FormLabel";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="outlined"
      color="neutral"
      aria-label="toggle light/dark mode"
      {...other}
      onClick={(event) => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
        onClick?.(event);
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

function DonationForm() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>("");

  const handleSelectChange = (
    event: React.ChangeEvent<{ value: string }>,
    value: unknown
  ) => {
    const selectedValue = value as string;
    setSelectedOption(selectedValue);
  };

  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault();

        const formElements = event.currentTarget.elements;
        console.dir(formElements);

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const data = {
          clothingType: formElements.clothingType[1]?.value,
          crisisArea: formElements.crisisArea[1]?.value,
          date: formElements.date?.value,
          time: formElements.time?.value,
          location: formElements.location?.value,
          pickupOption: selectedOption,
          abholadresse: formElements.abholadresse?.value,
        };

        const inputDate = new Date(data.date);
        const enteredZipCode = String(formElements.location?.value);
        const plzCheck = String("54")
        
        if (inputDate <= currentDate) {
          alert(
            "Das eingegebene Datum muss größer als das aktuelle Datum sein."
          );
          return;
        } else if (
          selectedOption === "Abholung" &&
          !enteredZipCode.startsWith(plzCheck)
        ) {
          alert("Die eingegebene Postleitzahl muss mit '54' beginnen.");
          return;
        } else {
          // DonationsForm-Komponente
          navigate("/Confirmation", { state: { donationData: data } });
        }
      }}
    >
      <FormControl required>
        <FormLabel>Art der Kleidung</FormLabel>
        <Select required name="clothingType">
          <Option value="T-Shirt">T-Shirts</Option>
          <Option value="Hemden/Blusen">Hemden/Blusen</Option>
          <Option value="Pullover">Pullover</Option>
          <Option value="Jacken/Mäntel">Jacken/Mäntel</Option>
          <Option value="Jeans/Hosen">Jeans/Hosen</Option>
          <Option value="Röcke/Kleider">Röcke/Kleider</Option>
          <Option value="Sportbekleidung">Sportbekleidung</Option>
          <Option value="Schuhe">Schuhe</Option>
          <Option value="Winterbekleidung">Winterbekleidung</Option>
          <Option value="Kostüme/Verkleidungen">Kostüme/Verkleidungen</Option>
          <Option value="sonstiges">sonstiges</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Krisengebiet</FormLabel>
        <Select required name="crisisArea">
          <Option value="Syrien">Syrien</Option>
          <Option value="Afghanistan">Afghanistan</Option>
          <Option value="Jemen">Jemen</Option>
          <Option value="Südsudan">Südsudan</Option>
          <Option value="Myanmar">Myanmar</Option>
          <Option value="Irak">Irak</Option>
          <Option value="Nigeria">Nigeria</Option>
          <Option value="Libyen">Libyen</Option>
          <Option value="Kongo">Kongo</Option>
          <Option value="Ukraine">Ukraine</Option>
          <Option value="Jemen">Jemen</Option>
          <Option value="Palästina">Palästina</Option>
          <Option value="Venezuela">Venezuela</Option>
          <Option value="Somalia">Somalia</Option>
          <Option value="Sudan">Sudan</Option>
          <Option value="Äthiopien">Äthiopien</Option>
          <Option value="Zentralafrikanische Republik">
            Zentralafrikanische Republik
          </Option>
          <Option value="Mali">Mali</Option>
          <Option value="Burundi">Burundi</Option>
          <Option value="Niger">Niger</Option>
          <Option value="Pakistan">Pakistan</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Übergabeoption</FormLabel>
        <Select
          required
          name="pickupOption"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <Option value="Abholung">Abholung</Option>
          <Option value="Übergabe an der Geschäftsstelle">
            Übergabe an der Geschäftsstelle
          </Option>
        </Select>
      </FormControl>
      {/* Abholadresse field, shown only if Abholung is selected */}
      {selectedOption === "Abholung" && (
        <div className="abholContainer">
          <FormControl required>
            <FormLabel>Postleitzahl</FormLabel>
            <Input type="text" name="location" placeholder="zb. 5400" />
          </FormControl>
          <FormControl required>
            <FormLabel>Abholadresse</FormLabel>
            <Input type="text" name="abholadresse" />
          </FormControl>
          <FormControl required>
            <FormLabel required>gewünschtes Abholdatum</FormLabel>
            <Input type="date" name="date" />
          </FormControl>
          <FormControl required>
            <FormLabel>Uhrzeit</FormLabel>
            <Input type="time" name="time" />
          </FormControl>
        </div>
      )}
      <Stack gap={4} sx={{ mt: 2 }}>
        <Button type="submit" fullWidth>
          Registrieren
        </Button>
      </Stack>
    </form>
  );
}

export default function JoySignInSideTemplate() {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Collapsed-breakpoint": "769px", // form will stretch when viewport is below `769px`
            "--Cover-width": "50vw", // must be `vw` only
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255 255 255 / 0.2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "left",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
              <Typography level="title-lg">
                <a className="return" href="/home">
                  zurück zur Hauptseite
                </a>
              </Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <DonationForm />
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © KleiderSpenden {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(/manequin.png)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          },
        })}
      />
    </CssVarsProvider>
  );
}
