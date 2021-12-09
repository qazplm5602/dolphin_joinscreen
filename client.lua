Citizen.CreateThread(
    function()
        while true do
            Citizen.Wait(0)
            if IsControlJustPressed(0, 213) then
                showimg()
                SetNuiFocus(true, true)
            end
        end
    end
)

Citizen.CreateThread(
    function()
    Citizen.Wait(3000)
        showimg()
        SetNuiFocus(true, true)
    end
)

function showimg()
    SendNUIMessage({
        type = "openui",
    })
end

RegisterNUICallback('close',
    function()
        SetNuiFocus(false, false)
    end
)

RegisterNetEvent("Dolphin:display")
AddEventHandler(
  "Dolphin:display",
  function()
    SendNUIMessage(
      {
        type = "openui",
      }
    )
  end
)

RegisterNetEvent("Dolphin:display2")
AddEventHandler(
  "Dolphin:display2",
  function()
    SendNUIMessage(
      {
        type = "closeui",
      }
    )
  end
)