import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./App.css";
import { MuiMasonry } from "./components/MuiMasonry";
// import { MuiTimeline } from "./components/Timeline";
// import { MuiTabs } from "./components/MuiTab";
// import { MuiDateRangePicker } from "./components/MuiDateRangePicker";
// import { MuiDateTimePicker } from "./components/MuiDateTimePicker";
// import { MuiLoadingButton } from "./components/MuiLoadingComponent";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiTable } from "./components/MuiTable";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiChip } from "./components/MuiChip";
// import { MuiList } from "./components/MuiList";
// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiBreadcrumbs } from "./components/MuiBreadcrump";
// import { MuiLink } from "./components/MuiLink";
// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiImageList } from "./components/MuiImageList";
// import { MuiAccordion } from "./components/MuiAccordion";
// import { MuiCard } from "./components/MuiCard";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiAutocomplete } from "./components/MuiAutocomplete";
// import { MuiRating } from "./components/MuiRating";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiCheckbox } from "./components/MuiCheckbox";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiSelect from "./components/MuiSelect";
// import MuiTextField from "./components/MuiTextField";
// import MuiButton from "./components/MuiButton";
// import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiDateTimePicker /> */}
        {/* <MuiDateRangePicker /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        <MuiMasonry />
      </div>
    </LocalizationProvider>
  );
}

export default App;
